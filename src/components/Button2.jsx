import Button from 'react-bootstrap/Button';

function BookNowButton() {
  return (
    <>
    <div className="d-flex justify-content-center my-4">
      <Button 
        variant="outline-danger" 
        size="lg" 
        className="px-4 py-3 fw-bold rounded-0"
        style={{
          borderColor: '#eb3d4f',
          color: 'white',
          backgroundColor:'#eb3d4f'
        }}
      >
        Book Now
      </Button>
    </div>
    </>
  );
}

export default BookNowButton