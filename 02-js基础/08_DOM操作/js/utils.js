function padLeft(content, count, padStr) {
  padStr = padStr || "0"
  count = count || 2

  content = String(content)
  return content.padStart(count, padStr)
}