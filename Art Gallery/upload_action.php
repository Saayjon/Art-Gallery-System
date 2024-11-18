<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "art_gallery";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle the form data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];

    // Handle image upload
    if (isset($_FILES['artworkImage']) && $_FILES['artworkImage']['error'] == 0) {
        $image = $_FILES['artworkImage']['name'];
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($image);

        // Move the uploaded file to the "uploads" directory
        if (move_uploaded_file($_FILES['artworkImage']['tmp_name'], $target_file)) {
            // Insert data into the database using prepared statements
            $stmt = $conn->prepare("INSERT INTO artworks (first_name, last_name, file_path) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $first_name, $last_name, $target_file);

            if ($stmt->execute()) {
                // Display confirmation message and redirect option
                echo "<p>Thanks for uploading! Would you like to upload more art?</p>";
                echo '<a href="upload.html"><button>Upload More</button></a>';
            } else {
                echo "<p>Error: " . $conn->error . "</p>";
            }

            $stmt->close();
        } else {
            echo "<p>Sorry, there was an error uploading your file.</p>";
        }
    }
} else {
    // Display the upload form if the user has not uploaded yet
    echo '<form method="post" action="upload_action.php" enctype="multipart/form-data">
            <label for="first_name">First Name:</label>
            <input type="text" name="first_name" required><br>
            <label for="last_name">Last Name:</label>
            <input type="text" name="last_name" required><br>
            <label for="artworkImage">Upload Artwork:</label>
            <input type="file" name="artworkImage" required><br>
            <button type="submit">Upload</button>
          </form>';
}

$conn->close();
?>
