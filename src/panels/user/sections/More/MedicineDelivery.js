import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

const MedicineDelivery = () => {
  return (
    <div style={{ backgroundColor: "#83bec9", padding: "50px" }}>
      <Paper elevation={1} style={{ borderRadius: "50px", padding: "20px" }}>
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            color: "#05445e",
            padding: "3%",
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "poppins, sans-sarif",
          }}
        >
          Medicine Delivery Policy
        </Typography>
        <Grid
          variant="h6"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-serif",
            fontWeight: 600,
            marginTop: "10px",
            fontSize: "18px",
            color: "#05445e",
          }}
        >
          Important Instructions:
        </Grid>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-serif",
            marginTop: "20px",
            fontSize: "13px",
          }}
        >
          Valid prescription from a Doctor is mandatory for all medicine orders.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-serif",
            marginTop: "10px",
            fontSize: "13px",
          }}
        >
          You are required to send a scan copy of valid prescription from an
          authorized Doctor which is mandatory.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-serif",
            marginTop: "10px",
            fontSize: "13px",
          }}
        >
          Kindly display the original prescription at the time of delivery or
          picking up of medicines.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-serif",
            marginTop: "10px",
            fontSize: "13px",
          }}
        >
          We will not be able to process the orders without a valid
          prescription.
        </Typography>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              marginTop: "30px",
              fontSize: "18px",
              color: "#05445e",
            }}
          >
            Pricing Information
          </Typography>
          <Typography
            style={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
          >
            While HapiDoc Pharmacy shall endeavor to provide accurate product
            and pricing information, yet typographical errors might occur.
            HapiDoc pharmacy cannot confirm the price of a product until after
            you order. In the event that a product is listed at an incorrect
            price or with incorrect information due to an error in pricing or
            product information, HapiDoc Pharmacy shall have the right, at our
            sole discretion, to refuse or cancel any orders placed for that
            product, unless the product has already been dispatched. In the
            event that an item is mis-priced, HapiDoc Pharmacy may, at its
            discretion, either contact you for instructions or cancel your order
            and notify you of such cancellation. Unless the product ordered by
            you has been dispatched, your offer will not be deemed accepted and
            HapiDoc Pharmacy will have the right to modify the price of the
            product and contact you for further instructions using the e-mail
            address/ contact no. provided by you during the time of
            registration, or cancel the order and notify you of such
            cancellation.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              marginTop: "30px",
              fontSize: "18px",
              color: "#05445e",
            }}
          >
            Our standard delivery time
          </Typography>
          <Typography
            style={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
          >
            We generally deliver orders within 2 hours but could take up to 8
            days depending on your delivery pincode and the items ordered.
            Kindly check the estimated delivery date displayed at the time of
            placing your order.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              marginTop: "15px",
              fontSize: "18px",
              color: "#05445e",
            }}
          >
            Do you deliver internationally?
          </Typography>
          <Typography
            style={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
          >
            International delivery is not available currently. You can order
            items from anywhere in the world, but the shipping address has to be
            in India.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              marginTop: "15px",
              fontSize: "18px",
              color: "#05445e",
            }}
          >
            Cancellation by HapiDoc pharmacy.in
          </Typography>
          <Typography
            style={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
          >
            Please note that there may be certain orders that we are unable to
            accept and must cancel. We reserve the right, at our sole
            discretion, to refuse or cancel any order for any reason. Some
            situations that may result in your order being cancelled include
            limitations on quantities available for purchase, inaccuracies or
            errors in product or pricing information, or problems identified by
            our credit and fraud avoidance department. We may also require
            additional verifications or information before accepting any order.
            We will contact you if all or any portion of your order is cancelled
            or if additional information is required to accept your order. If
            your order is cancelled after your account has been charged, the
            said amount will be reversed back in your account.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              marginTop: "15px",
              fontSize: "18px",
              color: "#05445e",
            }}
          >
            Cancellations by the Customer
          </Typography>
          <Typography
            style={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
          >
            In case we receive a cancellation notice and the order has not been
            shipped by us, we shall cancel the order and refund the entire
            amount. The orders that have already been shipped out by us will not
            be cancelled and you will have to check our return policy on those
            orders. The customer agrees not to dispute the decision made by
            HapiDoc pharmacy.in and accept HapiDoc pharmacy.in’s decision
            regarding the cancellation.
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
};

export default MedicineDelivery;
