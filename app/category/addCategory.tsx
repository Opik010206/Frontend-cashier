"use client";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function addCategory() {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    setIsMutating(true);

    await fetch("http://localhost:8000/api/category", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nama: nama,
      }),
    });
    setIsMutating(false);
    setNama("");
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleChange}>
        Add new
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-lg">Add new category</h1>
          <hr className="my-5" />
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-[max-content,1fr] gap-2 items-center">
              <label className="label font-bold text-right">Nama Category</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Nama Produk"
                id="product-name"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="submit" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}