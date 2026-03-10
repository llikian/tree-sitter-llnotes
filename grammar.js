/**
 * @file A small language for my note files.
 * @author llikian
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "llnotes",

  word: $ => $.tag,

  rules: {
    note: $ => repeat(
      choice(
        $._empty_line,
        $.tag_line,
        $.desc_line,
        $.text_block,
      )
    ),

    _empty_line: _ => /\n/,

    tag_line: $ => seq(
      '%',
      $.tag,
      repeat(seq(',', $.tag)),
      /\n/
    ),

    tag: _ => /[a-zA-Z][a-zA-Z0-9\-/]*/,

    desc_line: _ => /#.*\n/,

    text_block: _ => /[^#%\n].*\n/,
  }
});
