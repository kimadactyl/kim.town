export function removeSignupCards(html) {
  // These cards nest divs, so the end has to be found by counting depth.
  const cardStart = /<div[^>]*\bkg-signup-card[\s"][^>]*>/i
  let match
  while ((match = cardStart.exec(html))) {
    const divs = /<\/?div\b[^>]*>/gi
    divs.lastIndex = match.index
    let depth = 0
    let tag
    while ((tag = divs.exec(html))) {
      depth += tag[0].startsWith('</') ? -1 : 1
      if (depth === 0) break
    }
    if (!tag) throw new Error('Unclosed signup card in post HTML')
    html = html.slice(0, match.index) + html.slice(divs.lastIndex)
  }
  return html
}
