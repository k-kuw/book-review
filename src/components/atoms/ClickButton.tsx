import { memo } from "react";

// 各種ボタンコンポーネント
const ClickButton = memo(({ children }: { children: string }) => {
  return <button className="bg-amber-700 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">{children}</button>;
});

export default ClickButton;
