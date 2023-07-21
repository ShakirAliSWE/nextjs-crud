import AddProduct from "@/app/components/add-product";
import DeleteProduct from "@/app/components/delete-product";
import EditProduct from "@/app/components/edit-product";
import ViewProduct from "@/app/components/view-product";
import React from "react";

const ActionProductId = ({ params }) => {
  const { action, id } = params;
  switch (action) {
    case "add":
      return <AddProduct />;
    case "edit":
      return <EditProduct id={id} />;
    case "view":
      return <ViewProduct id={id} />;
  }
};

export default ActionProductId;
