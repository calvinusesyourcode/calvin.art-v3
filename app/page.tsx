import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import MatrixTitle from "@/components/matrix-title"

export default function IndexPage() {
  return (
    <>
      <div className="m-4">
        <MatrixTitle />
        <p className="text-muted-foreground">funding my startup by building webapps for local businesses</p>
        <p className="text-muted-foreground">c@calvin.art</p>
        <p className="text-muted-foreground">21</p>
      </div>
    </>
  )}