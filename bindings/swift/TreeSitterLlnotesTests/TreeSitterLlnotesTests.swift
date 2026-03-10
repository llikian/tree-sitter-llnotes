import XCTest
import SwiftTreeSitter
import TreeSitterLlnotes

final class TreeSitterLlnotesTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_llnotes())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading llikian's notes grammar")
    }
}
