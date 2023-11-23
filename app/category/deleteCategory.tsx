"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Category = {
  id: number;
  nama: string;
}

export default function DeleteCategory(category: Category) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(categoryId: number) {
    setIsMutating(true);

    await fetch(`http://localhost:8000/api/category/${categoryId}`, {
        method: 'DELETE',
    });
    setIsMutating(false);
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete  
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <div className="font-bold text-lg">Are you sure to delete {category.nama}</div>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button type="button" onClick={() => handleDelete(category.id)} className="btn btn-primary">
                  Delete
              </button>
            ): (
              <button type="submit" className="btn loading">
                  Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}