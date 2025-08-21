export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat("en-US").format(num)
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + "..."
}
