import { ISnippet } from "../interfaces/ISnippet";

const snippets: ISnippet[] = [
  {
    body: ["before(() => {", "\t${1}", "});"],
    description: "Mocha::Before ",
    functionType: "arrow",
    prefix: "before"
  },
  {
    body: ["before(function () {", "\t${1}", "});"],
    description: "Mocha::Before::Function",
    functionType: "function",
    prefix: "fbefore"
  },
  {
    body: ["before(function ${1}() {", "\t${2}", "});"],
    description: "Mocha::Before with Named Function",
    functionType: "arrow",
    prefix: "beforeNamed"
  },
  {
    body: ["before('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::Before with Description",
    functionType: "arrow",
    prefix: "beforeDescription"
  },
  {
    body: ["before('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::Before with Description::Function",
    functionType: "function",
    prefix: "fbeforeDescription"
  },
  {
    body: ["beforeEach(() => {", "\t${1}", "});"],
    description: "Mocha::Before Each",
    functionType: "arrow",
    prefix: "beforeEach"
  },
  {
    body: ["beforeEach(function () {", "\t${1}", "});"],
    description: "Mocha::Before Each::Function",
    functionType: "function",
    prefix: "fbeforeEach"
  },
  {
    body: ["beforeEach(function ${1}() {", "\t${2}", "});"],
    description: "Mocha::Before Each with Named Function",
    functionType: "arrow",
    prefix: "beforeEachNamed"
  },
  {
    body: ["beforeEach('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::Before Each with Description",
    functionType: "arrow",
    prefix: "beforeEachDescription"
  },
  {
    body: ["beforeEach('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::Before Each with Description::Function",
    functionType: "function",
    prefix: "fbeforeEachDescription"
  },
  {
    body: ["after(() => {", "\t${1}", "});"],
    description: "Mocha::After",
    functionType: "arrow",
    prefix: "after"
  },
  {
    body: ["after(function () {", "\t${1}", "});"],
    description: "Mocha::After::Function",
    functionType: "function",
    prefix: "fafter"
  },
  {
    body: ["after(function ${1}() {", "\t${2}", "});"],
    description: "Mocha::After with Named Function",
    functionType: "arrow",
    prefix: "afterNamed"
  },
  {
    body: ["after('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::After with Description",
    functionType: "arrow",
    prefix: "afterDescription"
  },
  {
    body: ["after('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::After with Description::Function",
    functionType: "function",
    prefix: "fafterDescription"
  },
  {
    body: ["afterEach(() => {", "\t${1}", "});"],
    description: "Mocha::After Each",
    functionType: "arrow",
    prefix: "afterEach"
  },
  {
    body: ["afterEach(function () {", "\t${1}", "});"],
    description: "Mocha::After Each::Function",
    functionType: "function",
    prefix: "fafterEach"
  },
  {
    body: ["afterEach(function ${1}() {", "\t${2}", "});"],
    description: "Mocha::After Each with Named Function",
    functionType: "arrow",
    prefix: "afterEachNamed"
  },
  {
    body: ["afterEach('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::After Each with Description",
    functionType: "arrow",
    prefix: "afterEachDescription"
  },
  {
    body: ["afterEach('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::After Each with Description::Function",
    functionType: "function",
    prefix: "fafterEachDescription"
  },
  {
    body: [
      "describe('${1}', () => {",
      "\tit('${2}', () => {",
      "\t\t${3}",
      "\t});",
      "});"
    ],
    description: "Mocha::Describe with It",
    functionType: "arrow",
    prefix: "describeAndIt"
  },
  {
    body: [
      "describe('${1}', function () {",
      "\tit('${2}', function () {",
      "\t\t${3}",
      "\t});",
      "});"
    ],
    description: "Mocha::Describe with It::Function",
    functionType: "function",
    prefix: "fdescribeAndIt"
  },
  {
    body: ["describe('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::Describe",
    functionType: "arrow",
    prefix: "describe"
  },
  {
    body: ["describe('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::Describe::Function",
    functionType: "function",
    prefix: "fdescribe"
  },
  {
    body: [
      "context('${1}', () => {",
      "\tit('${2}', () => {",
      "\t\t${3}",
      "\t});",
      "});"
    ],
    description: "Mocha::Context with It",
    functionType: "arrow",
    prefix: "contextAndIt"
  },
  {
    body: [
      "context('${1}', function () {",
      "\tit('${2}', function () {",
      "\t\t${3}",
      "\t});",
      "});"
    ],
    description: "Mocha::Context with It::Function",
    functionType: "function",
    prefix: "fcontextAndIt"
  },
  {
    body: ["context('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::Context",
    functionType: "arrow",
    prefix: "context"
  },
  {
    body: ["context('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::Context::Function",
    functionType: "function",
    prefix: "fcontext"
  },
  {
    body: ["it('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::It",
    functionType: "arrow",
    prefix: "it"
  },
  {
    body: ["it('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::It::Function",
    functionType: "function",
    prefix: "fit"
  },
  {
    body: ["suite('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::Suite",
    functionType: "arrow",
    prefix: "suite"
  },
  {
    body: ["suite('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::Suite::Function",
    functionType: "function",
    prefix: "fsuite"
  },
  {
    body: ["suiteSetup(() => {", "\t${1}", "});"],
    description: "Mocha::SuiteSetup",
    functionType: "arrow",
    prefix: "suiteSetup"
  },
  {
    body: ["suiteSetup(function () {", "\t${1}", "});"],
    description: "Mocha::SuiteSetup::Function",
    functionType: "function",
    prefix: "fsuiteSetup"
  },
  {
    body: ["setup(() => {", "\t${1}", "});"],
    description: "Mocha::Setup",
    functionType: "arrow",
    prefix: "setup"
  },
  {
    body: ["setup(function () {", "\t${1}", "});"],
    description: "Mocha::Setup::Function",
    functionType: "function",
    prefix: "fsetup"
  },
  {
    body: ["suiteTeardown(() => {", "\t${1}", "});"],
    description: "Mocha::SuiteTeardown",
    functionType: "arrow",
    prefix: "suiteTeardown"
  },
  {
    body: ["suiteTeardown(function () {", "\t${1}", "});"],
    description: "Mocha::SuiteTeardown::Function",
    functionType: "function",
    prefix: "fsuiteTeardown"
  },
  {
    body: ["teardown(() => {", "\t${1}", "});"],
    description: "Mocha::Teardown",
    functionType: "arrow",
    prefix: "teardown"
  },
  {
    body: ["teardown(function () {", "\t${1}", "});"],
    description: "Mocha::Teardown::Function",
    functionType: "function",
    prefix: "fteardown"
  },
  {
    body: ["test('${1}', () => {", "\t${2}", "});"],
    description: "Mocha::Test",
    functionType: "arrow",
    prefix: "test"
  },
  {
    body: ["test('${1}', function () {", "\t${2}", "});"],
    description: "Mocha::Test::Function",
    functionType: "function",
    prefix: "ftest"
  },
  {
    body: [
      "suite('${1}', () => {",
      "",
      "\tsuiteSetup(() => { });",
      "",
      "\ttest('${2}', () => {",
      "\t\t${3}",
      "\t});",
      "",
      "\tsuiteTeardown(() => { });",
      "});"
    ],
    description: "Mocha::EntireSuite",
    functionType: "arrow",
    prefix: "entireSuite"
  },
  {
    body: [
      "suite('${1}', function () {",
      "",
      "\tsuiteSetup(function () { });",
      "",
      "\ttest('${2}', function () {",
      "\t\t${3}",
      "\t});",
      "",
      "\tsuiteTeardown(function () { });",
      "});"
    ],
    description: "Mocha::EntireSuite::Function",
    functionType: "function",
    prefix: "fentireSuite"
  },
  {
    body: [
      "exports.${1} = {",
      "\t'${2}': {",
      "\t\t'${3}': () => {",
      "\t\t\t${4}",
      "\t\t},",
      "\t}",
      "};"
    ],
    description: "Mocha::ExportsSuite",
    functionType: "arrow",
    prefix: "exportsSuite"
  },
  {
    body: [
      "exports.${1} = {",
      "\t'${2}': {",
      "\t\t'${3}': function () {",
      "\t\t\t${4}",
      "\t\t},",
      "\t}",
      "};"
    ],
    description: "Mocha::ExportsSuite::Function",
    functionType: "function",
    prefix: "fexportsSuite"
  }
];

export default snippets;
