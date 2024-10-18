import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

// Dummy data for reviews
const dummyReviews = [
  { id: 1, type: 'hospital', name: 'Hospital A', rating: 4, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, type: 'lab', name: 'Lab B', rating: 5, review: 'Nulla facilisi. Duis condimentum tellus in odio efficitur, quis pharetra tortor luctus.' },
  { id: 3, type: 'medical_product', name: 'Medical Product C', rating: 3, review: 'Fusce a urna sit amet mauris rhoncus finibus non vel libero.' },
  // Add more dummy data as needed
];

const Feedback = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={2}>
        {dummyReviews.map((review) => (
          <Grid item xs={12} md={6} lg={4} key={review.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Type: {review.type}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Rating: {review.rating}
                </Typography>
                <Typography variant="body2">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feedback;