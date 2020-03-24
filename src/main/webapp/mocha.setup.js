import path from 'path'

import {setConfig} from 'next/config'
import {publicRuntimeConfig} from './test/next.config'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import cssModulesRequireHook from 'css-modules-require-hook'
import sass from 'node-sass'
import nodeSassPackageImporter from 'node-sass-package-importer'

setConfig({publicRuntimeConfig})

cssModulesRequireHook({
    extensions: ['.scss'],
    preprocessCss: (data, filepath) =>
        sass.renderSync({
            data,
            includePaths: [path.resolve(filepath, '..')],
            importer: nodeSassPackageImporter(),
        }).css,
})

Enzyme.configure({adapter: new Adapter()})

chai.use(chaiEnzyme())
global.expect = chai.expect
