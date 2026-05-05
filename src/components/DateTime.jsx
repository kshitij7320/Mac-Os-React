import { useEffect, useState } from "react"

const formatDateTime = (dateObj) => {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

  const dayName = days[dateObj.getDay()]
  const monthName = months[dateObj.getMonth()]
  const date = dateObj.getDate()

  let hours = dateObj.getHours()
  const minutes = dateObj.getMinutes().toString().padStart(2, "0")
  const period = hours >= 12 ? "pm" : "am"
  hours = hours % 12 || 12

  return `${dayName} ${monthName} ${date} ${hours}:${minutes}${period}`
}

const DateTime = () => {
  const [dateTime, setDateTime] = useState(() => formatDateTime(new Date()))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(formatDateTime(new Date()))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <div>{dateTime}</div>
}

export default DateTime
