import React from "react"

export default function DangerousHTML({ description }) {
  const data = description
  console.log(typeof data)
  return <div dangerouslySetInnerHTML={{ __html: data }} />
}
