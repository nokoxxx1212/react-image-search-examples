import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-200 p-4 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-4">メニュー</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-blue-500 hover:underline">アップロード</Link>
        </li>
        <li>
          <Link to="/history" className="text-blue-500 hover:underline">履歴一覧</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;