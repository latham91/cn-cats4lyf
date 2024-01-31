import "./BasketItem.css";

import { FaRegTrashCan } from "react-icons/fa6";

export default function BasketItem() {
    return (
        <div className="basketItem">
            <img src="https://via.placeholder.com/120x120" alt="placeholder image" />
            <div className="basketItem_content">
                <div className="basketItem_product_name">
                    <h4>Product Name</h4>
                    <FaRegTrashCan size={20} className="trashIcon" />
                </div>
                <span>SKU ID: 001</span>
                <div className="basketItem_details">
                    <span className="basketItems_details_price">£0.00</span>
                    <div>
                        <span>
                            <strong className="qty">Qty:</strong>
                            <input type="number" min={1} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}