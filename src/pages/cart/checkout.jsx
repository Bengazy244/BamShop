import { useState } from "react";
import "./checkout.css";

const Checkout = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{5}$/.test(formData.zip)) {
      newErrors.zip = "ZIP code must be 5 digits";
    }
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!formData.expiryDate.trim())
      newErrors.expiryDate = "Expiration date is required";
    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Checkout successful!");
    }
  };

  return (
    <div className="checkout">
      <h1>Checkout Form</h1>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>

        <div>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
        </div>

        <div>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </label>
          {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
        </div>

        <div>
          <label>
            ZIP Code:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </label>
          {errors.zip && <p style={{ color: "red" }}>{errors.zip}</p>}
        </div>

        <h2>Payment Details</h2>

        <div>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </label>
          {errors.cardNumber && (
            <p style={{ color: "red" }}>{errors.cardNumber}</p>
          )}
        </div>

        <div>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </label>
          {errors.expiryDate && (
            <p style={{ color: "red" }}>{errors.expiryDate}</p>
          )}
        </div>

        <div>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </label>
          {errors.cvv && <p style={{ color: "red" }}>{errors.cvv}</p>}
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
