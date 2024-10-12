import { Wrapper } from "@/ui/base";
import { Provider } from "@/models";

import type { ChildrenProps } from "@/types";
import type { Metadata } from "next";

import "./_style/index.scss";

const metadata: Metadata = {
  title: "Evgeniy Shteyn",
  description: "Frontend TypeScript web developer from Russia",
};

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Wrapper>{children}</Wrapper>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };
