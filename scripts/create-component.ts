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
        }
    } catch (error) {
        console.error(`Erro ao criar o componente ${componentName}:`, error)
    }
}
