// pages/challenges/file-tree-viewer.js
import { useState } from "react";

const data = {
  name: "root",
  children: [
    {
      name: "child1",
      children: [{ name: "grandchild1" }, { name: "grandchild2" }],
    },
    { name: "child2" },
  ],
};

export default function FileTreeViewer() {
  const [treeData, setTreeData] = useState(data);

  const toggleNode = (node) => {
    node.isOpen = !node.isOpen;
    setTreeData({ ...treeData });
  };

  const renderNode = (node) => (
    <li key={node.name}>
      <div onClick={() => toggleNode(node)}>
        {node.isOpen ? "▼" : "▶"} {node.name}
      </div>
      {node.isOpen && node.children && (
        <ul>{node.children.map((child) => renderNode(child))}</ul>
      )}
    </li>
  );

  return <ul>{renderNode(treeData)}</ul>;
}
