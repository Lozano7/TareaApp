import React from 'react';

export default function TodoButton(params) {
  return (
    <button
      className={`btn btn-sn btn-outline-${params.color}`}
      onClick={params.onClick}
    >
      {params.text}
    </button>
  );
}
