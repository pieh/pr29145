import React from "react"

import(
  /* webpackChunkName: "imp-prefetch", webpackPrefetch: true */ `../components/imp-prefetch`
).then(mod => {
  mod.wat()
})

import(
  /* webpackChunkName: "imp-preload", webpackPreload: true */ `../components/imp-preload`
).then(mod => {
  mod.wat2()
})

export default function Home() {
  return <div>Hello world!</div>
}
