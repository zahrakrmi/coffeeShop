"use client";
import React, { useState, useEffect } from "react";
import useStore from "../store/store";
import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Submitmassage from "@/components/Submitmassage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Page() {
  const { myPlus, myMinus } = useStore();
  const temp = useStore((state) => state.data);
  const [newPrices, setNewPrices] = useState({});
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [userInfo, setUserInfo] = useState({
    Name: "",
    LastName:"",
    Address: "",
    zipCode:"",
    Phone: "",
  });
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const updatePrices = {};
    let total = 0;

    temp.forEach((item) => {
      updatePrices[item.id] = item.price * item.count;
      total += item.price * item.count;
    });

    const theTax = total * 0.1;
    const totalPrices = total + theTax;

    setNewPrices(updatePrices);
    setTotalItemsPrice(total);
    setTax(theTax);
    setTotalPrice(totalPrices);
  }, [temp]);

  const changePrice = (id, operation) => {
    const updatePrices = { ...newPrices };
    const item = temp.find((val) => val.id === id);

    if (operation === "increase") {
      updatePrices[id] = item.price * (item.count + 1);
    } else if (operation === "decrease" && item.count > 0) {
      updatePrices[id] = item.price * (item.count - 1);
    }
    const total = Object.values(updatePrices).reduce((sum, price) => sum + price, 0);
    setNewPrices(updatePrices);
    setTotalItemsPrice(total);
  };

  const Order = () => {
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const submit = () => {
    console.log(userInfo);
    setOpenDialog(false);
    setMessage(true);
  };

  const closeMessage = () => {
    setMessage(false);
  };

  return (
    <div className="w-full text-xl text-center flex flex-wrap p-4">
      <button className="mt-16  h-10">
        <Link href="./">
          <ArrowBackIcon />
        </Link>
      </button>
      <article className="w-full mt-6 lg:w-7/12 flex flex-col items-center">
        {temp &&
          temp.map((val, i) => (
            <div key={i} className="w-full flex flex-wrap justify-center lg:justify-between my-5">
              <Image
                width={300}
                height={300}
                src={val.avatar}
                className="object-cover"
                alt="img"
              />
              <div className="w-full lg:w-6/12 text-center lg:text-left mt-6">
                <h2 className="text-lg font-semibold">Name: {val.name}</h2>
                <h3 className="text-lg font-medium">
                  Price: ${newPrices[val.id] !== undefined ? newPrices[val.id] : val.price * val.count}.00
                </h3>
                <div className="flex items-center justify-center lg:justify-start mt-4 space-x-2">
                  <IconButton
                    onClick={() => {
                      myMinus(val.id);
                      changePrice(val.id, "decrease");
                    }}
                    color="error"
                    aria-label="remove from shopping cart"
                  >
                    <RemoveShoppingCartIcon />
                  </IconButton>
                  <span className="text-lg font-semibold">{val.count}</span>
                  <IconButton
                    color="success"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      myPlus(val.id);
                      changePrice(val.id, "increase");
                    }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  className="mt-4"
                  sx={{
                    backgroundColor: "burlywood",
                    color: "white",
                    ":hover": { backgroundColor: "darkorange" },
                  }}
                  onClick={Order}
                >
                  Order
                </Button>
              </div>
            </div>
          ))}
      </article>
      <div className="w-full lg:w-3/12 lg:mt-16 md:h-44 text-white bg-[#d8b98d] rounded-xl p-4 mt-6  lg:ml-4">
        <h2 className="text-lg font-bold border-b-2 pb-2">Cart</h2>
        <p className="text-md mt-2">Price: ${totalItemsPrice}.00</p>
        <p className="text-md mt-2">Tax: ${tax.toFixed(2)}</p>
        <p className="text-md mt-2">Total: ${totalPrice}</p>
      </div>
      <Dialog  sx={{ borderRadius: '50px' }} open={openDialog} onClose={closeDialog} >
        <DialogTitle sx={{ backgroundColor: "#282c34", color: "white" }}>
          Specifications
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#282c34" }}>
          <TextField
            fullWidth
            label="Name"
            margin="dense"
            value={userInfo.Name}
            onChange={(e) => setUserInfo({ ...userInfo, Name: e.target.value })}
            InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", 
                  },
                  "&:hover fieldset": {
                    borderColor: "darkorange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", 
                  },
                }
              }}
          />
          <TextField
            fullWidth
            label="LastName"
            margin="dense"
            value={userInfo.LastName}
            onChange={(e) => setUserInfo({ ...userInfo, LastName: e.target.value })}
            InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", 
                  },
                  "&:hover fieldset": {
                    borderColor: "darkorange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", 
                  },
                }
              }}
          />
          <TextField
            fullWidth
            label="Address"
            margin="dense"
            value={userInfo.Address}
            onChange={(e) => setUserInfo({ ...userInfo, Address: e.target.value })}
            InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", 
                  },
                  "&:hover fieldset": {
                    borderColor: "darkorange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", 
                  },
                }
              }}
          />
          <TextField
            fullWidth
            label="zip code"
            margin="dense"
            value={userInfo.zipCode}
            onChange={(e) => setUserInfo({ ...userInfo, zipCode: e.target.value })}
            InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", 
                  },
                  "&:hover fieldset": {
                    borderColor: "darkorange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", 
                  },
                }
              }}
          />
          <TextField
            fullWidth
            label="Phone"
            margin="dense"
            value={userInfo.Phone}
            onChange={(e) => setUserInfo({ ...userInfo, Phone: e.target.value })}
            InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", 
                  },
                  "&:hover fieldset": {
                    borderColor: "darkorange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", 
                  },
                }
              }}
          />
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' ,backgroundColor: "#282c34" }}>
  <Button color="error" onClick={closeDialog}>
    Cancel
  </Button>
  <Button color="success" onClick={submit}>
    Send
  </Button>
</DialogActions>
      </Dialog>
      <Submitmassage onClose={closeMessage} open={message} message="Your order has been successfully placed:)" />
    </div>
  );
}
