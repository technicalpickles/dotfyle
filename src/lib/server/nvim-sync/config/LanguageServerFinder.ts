export function *findKnownLanguageServers(content: string) {
  for (const ls of KNOWN_LANGUAGE_SERVERS) {
    if(content.indexOf(`"${ls}"`) >= 0) {
      yield ls
    }
    if(content.indexOf(`'${ls}'`) >= 0) {
      yield ls
    }
  }
}

export const KNOWN_LANGUAGE_SERVERS = [
	'als',
	'anakin_language_server',
	'angularls',
	'ansiblels',
	'antlersls',
	'apex_ls',
	'arduino_language_server',
	'asm_lsp',
	'astro',
	'awk_ls',
	'azure_pipelines_ls',
	'bashls',
	'beancount',
	'bicep',
	'blueprint_ls',
	'bright_script',
	'bsl_ls',
	'buck2',
	'buddy_ls',
	'bufls',
	'cadence',
	'cairo_ls',
	'ccls',
	'clangd',
	'clarity_lsp',
	'clojure_lsp',
	'cmake',
	'cobol_ls',
	'codeqlls',
	'coffeesense',
	'crystalline',
	'csharp_ls',
	'cssls',
	'cssmodules_ls',
	'cucumber_language_server',
	'custom_elements_ls',
	'dafny',
	'dagger',
	'dartls',
	'denols',
	'dhall_lsp_server',
	'diagnosticls',
	'digestif',
	'docker_compose_language_service',
	'dockerls',
	'dolmenls',
	'dotls',
	'drools_lsp',
	'ds_pinyin_lsp',
	'ecsact',
	'efm',
	'elixirls',
	'elmls',
	'ember',
	'emmet_ls',
	'erg_language_server',
	'erlangls',
	'esbonio',
	'eslint',
	'fennel_language_server',
	'fennel_ls',
	'flow',
	'flux_lsp',
	'foam_ls',
	'fortls',
	'fsautocomplete',
	'fsharp_language_server',
	'fstar',
	'futhark_lsp',
	'gdscript',
	'ghcide',
	'ghdl_ls',
	'gleam',
	'glint',
	'glslls',
	'golangci_lint_ls',
	'gopls',
	'gradle_ls',
	'grammarly',
	'graphql',
	'groovyls',
	'haxe_language_server',
	'hdl_checker',
	'helm_ls',
	'hhvm',
	'hie',
	'hls',
	'hoon_ls',
	'html',
	'idris2_lsp',
	'intelephense',
	'java_language_server',
	'jdtls',
	'jedi_language_server',
	'jqls',
	'jsonls',
	'jsonnet_ls',
	'julials',
	'kotlin_language_server',
	'lean3ls',
	'leanls',
	'lelwel_ls',
	'lemminx',
	'ltex',
	'lua_ls',
	'luau_lsp',
	'm68k',
	'marksman',
	'matlab_ls',
	'metals',
	'millet',
	'mint',
	'mlir_lsp_server',
	'mlir_pdll_lsp_server',
	'mm0_ls',
	'move_analyzer',
	'neocmake',
	'nickel_ls',
	'nil_ls',
	'nim_langserver',
	'nimls',
	'nixd',
	'nomad_lsp',
	'ntt',
	'nxls',
	'ocamlls',
	'ocamllsp',
	'ols',
	'omnisharp',
	'opencl_ls',
	'openedge_ls',
	'openscad_ls',
	'openscad_lsp',
	'pact_ls',
	'pasls',
	'perlls',
	'perlnavigator',
	'perlpls',
	'pest_ls',
	'phan',
	'phpactor',
	'please',
	'powershell_es',
	'prismals',
	'prolog_ls',
	'prosemd_lsp',
	'psalm',
	'puppet',
	'purescriptls',
	'pylsp',
	'pylyzer',
	'pyre',
	'pyright',
	'qml_lsp',
	'qmlls',
	'quick_lint_js',
	'r_language_server',
	'racket_langserver',
	'raku_navigator',
	'reason_ls',
	'relay_lsp',
	'remark_ls',
	'rescriptls',
	'rls',
	'rnix',
	'robotframework_ls',
	'rome',
	'ruby_ls',
	'ruff_lsp',
	'rust_analyzer',
	'salt_ls',
	'scheme_langserver',
	'scry',
	'serve_d',
	'sixtyfps',
	'slint_lsp',
	'smarty_ls',
	'smithy_ls',
	'solang',
	'solargraph',
	'solc',
	'solidity',
	'solidity_ls',
	'solidity_ls_nomicfoundation',
	'sorbet',
	'sourcekit',
	'sourcery',
	'spectral',
	'sqlls',
	'sqls',
	'standardrb',
	'starlark_rust',
	'statix',
	'steep',
	'stylelint_lsp',
	'svelte',
	'svlangserver',
	'svls',
	'syntax_tree',
	'tailwindcss',
	'taplo',
	'tblgen_lsp_server',
	'teal_ls',
	'terraform_lsp',
	'terraformls',
	'texlab',
	'textlsp',
	'tflint',
	'theme_check',
	'tilt_ls',
	'tsserver',
	'turtle_ls',
	'typeprof',
	'typst_lsp',
	'unison',
	'unocss',
	'uvls',
	'vala_ls',
	'vale_ls',
	'vdmj',
	'verible',
	'veridian',
	'veryl_ls',
	'vhdl_ls',
	'vimls',
	'visualforce_ls',
	'vls',
	'volar',
	'vtsls',
	'vuels',
	'wgsl_analyzer',
	'yamlls',
	'yls',
	'zk',
	'zls'
];
