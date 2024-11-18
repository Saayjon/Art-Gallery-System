<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Explore Art</title>
  <link rel="stylesheet" href="explore.css">
</head>
<body>
  
  <!-- Navigation Bar -->
  <div class="nav-container">
    <nav>
        <a href="index.html" id="home-link">Home</a> &nbsp;
        <a href="#artists" id="artists-link">Artists</a> &nbsp;
        <a href="explore.php">Explore</a> &nbsp;
        <a href="upload.html">Upload</a> &nbsp;
        <a href="#contact" id ="contact-link">Contact</a>
    </nav>
  </div>

  <!-- Explore Section -->
  <section class="explore-section">
    <h1>Explore Artworks</h1>
    <div class="artworks-container">
      <?php
      // Database connection
      $servername = "localhost";
      $username = "root";
      $password = "";
      $database = "art_gallery";

      $conn = new mysqli($servername, $username, $password, $database);

      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }

      // Fetch artworks from the database
      $query = "SELECT first_name, last_name, file_path FROM artworks ORDER BY uploaded_at DESC";
      $result = $conn->query($query);

      if ($result->num_rows > 0) {
          // Loop through and display each artwork
          while ($row = $result->fetch_assoc()) {
              echo "<div class='art-item'>";
              echo "<img src='" . htmlspecialchars($row['file_path']) . "' alt='Artwork'>";
              echo "<p><strong>" . htmlspecialchars($row['first_name']) . " " . htmlspecialchars($row['last_name']) . "</strong></p>";
              echo "</div>";
          }
      } else {
          echo "<p>No artworks to display yet. Be the first to upload!</p>";
      }

      $conn->close();
      ?>
    </div>
  </section>

</body>
</html>
