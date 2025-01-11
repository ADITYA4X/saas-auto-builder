import { ConnectionsProvider } from "@/src/providers/connections-provider";
import EditorProvider from "@/src/providers/editor-provider";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default Page;
