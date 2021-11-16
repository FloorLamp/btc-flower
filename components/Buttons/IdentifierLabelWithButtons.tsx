import { Principal } from "@dfinity/principal";
import classNames from "classnames";
import React from "react";
import { shortAccount, shortPrincipal } from "../../lib/utils";

export type IdentifierRenderProps = {
  rawId: string;
  displayId: string;
};

const defaultRender = ({ rawId, displayId }: IdentifierRenderProps) => {
  // Show raw id as title when using name or short id
  const showTitle = rawId !== displayId;
  return showTitle ? <span title={rawId}>{displayId}</span> : <>{displayId}</>;
};

/**
 * @param showName - Show or hide the name, if available
 */
export default function IdentifierLabelWithButtons({
  className,
  type,
  id,
  isShort = false,
  render = defaultRender,
}: {
  className?: string;
  type: "Principal" | "Account";
  id: Principal | string | bigint;
  forceShowId?: boolean;
  showName?: boolean;
  isShort?: boolean;
  showButtons?: boolean;
  render?: (arg: IdentifierRenderProps) => JSX.Element;
}) {
  const rawId =
    typeof id === "object" && "_isPrincipal" in id
      ? id.toText()
      : typeof id === "bigint"
      ? id.toString()
      : id;

  let shortId: string;
  if (type === "Principal" || type === "Account") {
    if (type === "Principal") shortId = shortPrincipal(rawId);
    else if (type === "Account") shortId = shortAccount(rawId);
  }

  const displayId = isShort ? shortId ?? rawId : rawId;

  return (
    <span className={classNames("break-all leading-tight", className)}>
      {render({ rawId, displayId })}
    </span>
  );
}
