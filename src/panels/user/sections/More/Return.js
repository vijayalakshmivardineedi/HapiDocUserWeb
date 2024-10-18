import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const styles = {
  cell: {
    padding: "3px",
    border: "1px solid black",
    fontFamily: "poppins, sans-sarif",
    fontSize: "13px",
  },
  headerCell: {
    padding: "5px",
    border: "1px solid black",
    backgroundColor: "#f0f0f0",
    fontFamily: "poppins, sans-sarif",
    fontSize: "13px",
    fontWeight: 600,
  },
};

const Return = () => {
  return (
    <Grid style={{ backgroundColor: "#83bec9", padding: "50px" }}>
      <Paper elevation={1} style={{ borderRadius: "50px", padding: "20px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            color: "#05445e",
            padding: "3%",
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "poppins, sans-sarif",
          }}
        >
          Return Policy
        </Typography>

        <Container
          style={{
            padding: "24px",
          }}
        >
          <Typography
            variant="body1"
            style={{
              marginBottom: 11,
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            HapiDoc strives to deliver correct medicines/items in the
            right/undamaged condition every time the customer places an order.
            We strongly recommend our customers to check the condition of the
            delivered products at the time of delivery and get back to us if
            there are any discrepancies.
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: 11,
              fontWeight: 550,
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            Please note that the window to raise a return request is open till
            48 hours after the order has been delivered . The items are eligible
            for a return under the following circumstances.
          </Typography>
          <Typography
            variant="h9"
            style={{
              color: "#05445e",
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            <ul>
              <li>
                Product(s) delivered do not match the order: This would include
                items that are different from what the customer ordered.
              </li>
              <li>
                Product(s) were delivered in damaged/non-working condition.
              </li>
              <li>
                Product(s) have missing parts or accessories or different from
                their description on the product page.
              </li>
              <li>
                Product(s) are returned in original packaging i.e. with labels,
                barcode, price tags, original serial no. etc.
              </li>
              <li>
                Batch number of the product(s) being returned matches with the
                one(s) mentioned in the invoice.
              </li>
              <li>
                Product(s)/medicines(s)/bottle(s) are unused. Opened medicine
                strip(s)/bottle(s) are not eligible for returns.
              </li>
              <li>
                The damages/defects are covered under the manufacturer’s
                warranty.
              </li>
            </ul>
          </Typography>
          <Grid
            style={{
              textAlign: "left",
              marginBottom: "11px",
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            <span style={{ fontWeight: "600" }}>Note:</span> Replacement of
            product(s)/order is not supported as of now. For such cases, the
            customer needs to return the items and refund will be issued post
            verification.
          </Grid>

          <Typography
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            Certain categories of products are not eligible for returns:
          </Typography>
        </Container>
        <TableContainer>
          <Table width={400}>
            <TableHead>
              <TableRow>
                <TableCell style={styles.headerCell} align="left" width={170}>
                  Categories
                </TableCell>
                <TableCell style={styles.headerCell} align="left" width={442}>
                  Type of products
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={styles.cell}>
                  Temperature controlled medicines
                </TableCell>
                <TableCell style={styles.cell}>
                  Vials, Injections, Pen-fills, Vaccines or any other products
                  or specialty medicines requiring cold storage
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Baby Care</TableCell>
                <TableCell style={styles.cell}>
                  Breast Pumps, Diapers, Ear Syringes, Wipe Warmers, Bottle
                  Nipples
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Food and Nutrition</TableCell>
                <TableCell style={styles.cell}>
                  Health supplements and drinks
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Healthcare devices</TableCell>
                <TableCell style={styles.cell}>
                  Glucometer Lancet, Healthcare Devices, Surgical, Health
                  Monitors
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Sexual Wellness</TableCell>
                <TableCell style={styles.cell}>
                  Condoms, Fertility Kit, Lubricants, Pregnancy Kits
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Personal Care</TableCell>
                <TableCell style={styles.cell}>
                  Oral Care (Toothbrushes, toothpastes, mouthwashes etc);
                  Feminine Hygiene (Sanitary Pads, Panty Liners, Menstrual Cups
                  etc.); Shaving and Hair Removal (Men’s Shaving – Razors,
                  Blades, Shaving Foams, Brushes etc.; Men’s Beard Care – Beard
                  Oil, Beard Serum etc.; Women’s Hair Removal – Wax Strips,
                  Creams, Razors etc)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Family Nutrition</TableCell>
                <TableCell style={styles.cell}>
                  Infant Baby Food, Toddlers and Kids Health Drinks
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>
                  Vitamin and Mineral Supplements
                </TableCell>
                <TableCell style={styles.cell}>
                  Core Letter Vitamins, Multi-Vitamins
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.cell}>Health Care Products</TableCell>
                <TableCell style={styles.cell}>
                  Ayurveda Products, Pain Relief Products, Herbal Supplements,
                  Medical Supplies, Adult Diapers
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          variant="body1"
          style={{
            marginTop: "5%",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          In case these items are received as damaged, customers are requested
          to contact the customer care and a refund would be issued post
          verification. We might ask for pictures/video for verification
          purpose.
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontFamily: "poppins, sans-sarif",
          }}
        >
          Return Process
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "5px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          If your order is eligible for a return, you can raise a return request
          within 48 hours from the date of delivery. All returns are reviewed
          for eligibility and refund is subject to review and verification by
          HapiDoc team.
        </Typography>
        <Typography variant="h10">
          <ul
            style={{
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
              color: "#05445e",
            }}
          >
            <li>
              Login to app and feel free to raise a ticket via App My Account
              Need Help “I would like to return my order” and initiate /
              intimate return.
            </li>
            <li>
              Upon eligibility verification, HapiDoc will initiate return and
              intimate the collection of product(s) to be returned. Return pick
              up should happen within 3 days of raising the return request.
            </li>
            <li>
              The customer is required to handover the product in original
              packaging.
            </li>
            <li>
              Refund will be initiated once HapiDoc receives the product and
              verifies the same.
            </li>
          </ul>
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontFamily: "poppins, sans-sarif",
          }}
        >
          Refund Timelines
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "10px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          Refunds for all eligible Returns are issued through the payment method
          used at the time of purchase, except for Cash on Delivery.
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "15px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          The time frame for different payment modes is typically 5-7* business
          days post the return has been received and verified by HapiDoc.
        </Typography>
        {/* <Typography variant="body1" style={{ marginTop: "5px" ,}}>
                * Refund timelines depend on bank turnaround times and RBI guidelines. This may change from time to time. Business days shall mean the working days on which HapiDoc corporate office operates. Considering limited manpower at banks due to COVID-19, refund timelines might vary.
            </Typography> */}
        <Typography
          variant="body1"
          style={{
            marginTop: "10px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          For orders placed using Cash on Delivery as the payment method,
          refunds can be processed to your bank account via National Electronic
          Funds Transfer (NEFT). There will be no cash refund. You will need to
          update the following information to enable us to process a refund to
          your account.
        </Typography>

        <Typography variant="h10">
          <ul
            className="list-style-one clearfix"
            style={{
              marginTop: "20px",
              color: "#05445e",
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            <li>The Bank Account Number</li>
            <li>IFSC Code</li>
            <li>Account Holder's Name</li>
          </ul>
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "20px",
            fontFamily: "poppins, sans-sarif",
            marginBottom: "50px",
            fontSize: "13px",
          }}
        >
          Important: Refunds cannot be processed to third-party accounts. The
          name on your HapiDoc account should match with the name of the bank
          account holder. HapiDoc will not be liable for any delay caused in
          refunds due to delay by third party affiliates (including banks), in
          providing information by the customer, technical issues and other
          reasons beyond its control.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Return;
