const fs = require('fs-extra')
const path = require('path')

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
    } catch (error) {}
}
