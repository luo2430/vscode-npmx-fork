import type { OffsetRange } from 'npmx-language-core/types'
import type { TextDocument } from 'vscode'
import { Range } from 'vscode'

export function offsetRangeToRange(document: TextDocument, [start, end]: OffsetRange): Range {
  return new Range(
    document.positionAt(start),
    document.positionAt(end),
  )
}
