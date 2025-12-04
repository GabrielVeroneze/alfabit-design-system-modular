import fs from 'fs-extra'
import path from 'path'

async function createComponent(componentName: string) {
    try {
        const templateDir = path.join(
            __dirname,
            '../packages/component-template',
        )

        const targetDir = path.join(
            __dirname,
            '../packages',
            `alfabit-${componentName.toLowerCase()}`,
        )

        if (!fs.existsSync(templateDir)) {
            throw new Error(
                `Não foi encontrado o diretório de template: ${targetDir}`,
            )
        }

        if (fs.existsSync(targetDir)) {
            throw new Error(
                `O diretório do componente ${componentName} já existe em: ${targetDir}`,
            )
        }

        await fs.copy(templateDir, targetDir)
        console.log(`Template copiado com sucesso para ${targetDir}`)

        const files = await fs.readdir(targetDir)

        for (const file of files) {
            const filePath = path.join(targetDir, file)
            const stat = await fs.stat(filePath)

            if (stat.isDirectory()) {
                const subFiles = await fs.readdir(filePath)

                files.push(
                    ...subFiles.map((subFile) => path.join(file, subFile)),
                )

                continue
            }

            if (
                file.endsWith('.tsx') ||
                file.endsWith('.ts') ||
                file.endsWith('.json') ||
                file.endsWith('.js')
            ) {
                console.log(`Processando o arquivo: ${file}`)

                let content = await fs.readFile(filePath, 'utf-8')

                content = content.replace(/Component/g, componentName)
                content = content.replace(
                    /component-template/g,
                    componentName.toLowerCase(),
                )

                await fs.writeFile(filePath, content)
            }
        }

        const renames = [
            ['src/Component.tsx', `src/${componentName}.tsx`],
            ['src/Component.styles.ts', `src/${componentName}.styles.ts`],
            [
                'src/Component.stories.ts',
                `../../apps/docs/src/stories/${componentName}.stories.ts`,
            ],
        ]

        for (const [oldPath, newPath] of renames) {}
    } catch (error) {
        console.error(`Erro ao criar o componente ${componentName}:`, error)
    }
}
