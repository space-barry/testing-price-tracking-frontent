# from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
# import bcrypt
# import json
# import os

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'  # Necessary for flash messages

# # Path to the user.json file
# user_file = "user.json"

# # Ensure the user.json file exists
# if not os.path.exists(user_file):
#     with open(user_file, "w") as f:
#         json.dump([], f)

# # Function to load users from the JSON file
# def load_users():
#     with open(user_file, "r") as f:
#         return json.load(f)

# # Function to save users to the JSON file
# def save_users(users):
#     with open(user_file, "w") as f:
#         json.dump(users, f, indent=4)

# # Route for the landing page (index.html)
# @app.route("/")
# def index():
#     return render_template("index.html")

# # Route for the sign-in page (signin.html)
# @app.route("/signin.html", methods=["GET", "POST"])
# def signin():
#     if request.method == "POST":
#         email = request.form.get("email")
#         password = request.form.get("password")

#         # Load users
#         users = load_users()

#         # Find user by email
#         for user in users:
#             if user["email"] == email:
#                 # Check password
#                 if bcrypt.checkpw(password.encode("utf-8"), user["password"].encode("utf-8")):
#                     flash("Login successful!", "success")
#                     return redirect(url_for("profile"))  # Redirect to profile page
#                 else:
#                     flash("Invalid credentials!", "error")
#                     return redirect(url_for("signin"))

#         flash("User not found!", "error")
#         return redirect(url_for("signin"))

#     return render_template("signin.html")  # GET method renders the sign-in form

# # Route for the user profile page (profile.html)
# @app.route("/profile.html")
# def profile():
#     return render_template("profile.html")  # Render user profile page

# # Route for the register page (register.html)
# @app.route("/register.html", methods=["GET", "POST"])
# def register():
#     if request.method == "POST":
#         username = request.form.get("username")
#         email = request.form.get("email")
#         password = request.form.get("password")

#         # Load users
#         users = load_users()

#         # Check if email is already registered
#         for user in users:
#             if user["email"] == email:
#                 flash("This email is already registered.", "error")
#                 return redirect(url_for("register"))

#         # Encrypt password
#         hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

#         # Create new user
#         new_user = {
#             "username": username,
#             "email": email,
#             "password": hashed_password.decode("utf-8")
#         }

#         # Add user to users list
#         users.append(new_user)

#         # Save to user.json
#         save_users(users)

#         return redirect(url_for("signin"))  # Redirect to sign-in page after registration

#     return render_template("register.html")  # GET method renders the registration form

# # Route for editing the profile
# # Route for editing the profile
# @app.route("/edit_profile.html", methods=["GET", "POST"])
# def edit_profile():
#     if request.method == "POST":
#         # Extract user data from the form
#         username = request.form.get("username")
#         email = request.form.get("email")
#         dob = request.form.get("dob")
#         location = request.form.get("location")
#         bio = request.form.get("bio")

#         # Handle profile picture upload
#         profile_picture = request.files.get("profile_picture")
#         picture_path = ""
#         if profile_picture:
#             # Save the image file
#             picture_path = f"static/profile_pics/{profile_picture.filename}"
#             profile_picture.save(picture_path)

#         # Load users
#         users = load_users()
#         for user in users:
#             if user["email"] == email:  # Assuming unique emails
#                 user["username"] = username
#                 user["dob"] = dob
#                 user["location"] = location
#                 user["bio"] = bio
#                 if picture_path:  # Update picture path only if a new image is uploaded
#                     user["profile_picture"] = picture_path
#                 break

#         # Save the updated user data
#         save_users(users)

#         flash("Profile updated successfully!", "success")  # Flash message for success
#         return redirect(url_for("profile"))  # Redirect to the profile page

#     return render_template("edit_profile.html")  # Render the edit profile form

# if __name__ == "__main__":
#     app.run(debug=True)






from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
import bcrypt
import json
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Necessary for flash messages

# Path to the user.json file
user_file = "user.json"

# Ensure the user.json file exists
if not os.path.exists(user_file):
    with open(user_file, "w") as f:
        json.dump([], f)

# Function to load users from the JSON file
def load_users():
    with open(user_file, "r") as f:
        return json.load(f)

# Function to save users to the JSON file
def save_users(users):
    with open(user_file, "w") as f:
        json.dump(users, f, indent=4)

# Route for the landing page (index.html)
@app.route("/")
def index():
    return render_template("index.html")

# Route for the sign-in page (signin.html)
@app.route("/signin.html", methods=["GET", "POST"])
def signin():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        # Load users
        users = load_users()

        # Find user by email
        for user in users:
            if user["email"] == email:
                # Check password
                if bcrypt.checkpw(password.encode("utf-8"), user["password"].encode("utf-8")):
                    flash("Login successful!", "success")
                    return redirect(url_for("welcome"))  # Redirect to welcome page
                else:
                    flash("Invalid credentials!", "error")
                    return redirect(url_for("signin"))

        flash("User not found!", "error")
        return redirect(url_for("signin"))

    return render_template("signin.html")  # GET method renders the sign-in form

# Route for the user welcome page (welcome.html)
@app.route("/welcome.html")
def welcome():
    return render_template("welcome.html")  # Render the welcome page

# Route for the user profile page (profile.html)
@app.route("/profile.html")
def profile():
    return render_template("profile.html")  # Render user profile page

# Route for the register page (register.html)
@app.route("/register.html", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        # Load users
        users = load_users()

        # Check if email is already registered
        for user in users:
            if user["email"] == email:
                flash("This email is already registered.", "error")
                return redirect(url_for("register"))

        # Encrypt password
        hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

        # Create new user
        new_user = {
            "username": username,
            "email": email,
            "password": hashed_password.decode("utf-8")
        }

        # Add user to users list
        users.append(new_user)

        # Save to user.json
        save_users(users)

        return redirect(url_for("signin"))  # Redirect to sign-in page after registration

    return render_template("register.html")  # GET method renders the registration form

# Route for editing the profile
@app.route("/edit_profile.html", methods=["GET", "POST"])
def edit_profile():
    if request.method == "POST":
        # Extract user data from the form
        username = request.form.get("username")
        email = request.form.get("email")
        dob = request.form.get("dob")
        location = request.form.get("location")
        bio = request.form.get("bio")

        # Handle profile picture upload
        profile_picture = request.files.get("profile_picture")
        picture_path = ""
        if profile_picture:
            # Save the image file
            picture_path = f"static/profile_pics/{profile_picture.filename}"
            profile_picture.save(picture_path)

        # Load users
        users = load_users()
        for user in users:
            if user["email"] == email:  # Assuming unique emails
                user["username"] = username
                user["dob"] = dob
                user["location"] = location
                user["bio"] = bio
                if picture_path:  # Update picture path only if a new image is uploaded
                    user["profile_picture"] = picture_path
                break

        # Save the updated user data
        save_users(users)

        flash("Profile updated successfully!", "success")  # Flash message for success
        return redirect(url_for("profile"))  # Redirect to the profile page

    return render_template("edit_profile.html")  # Render the edit profile form

# @app.route("/dashboard.html")
# def dashboard():
#     return render_template("dashboard.html")  # Render the dashboard page



import matplotlib.pyplot as plt
import json
import os
from flask import Flask, request, jsonify, render_template, redirect, url_for, flash

# Existing code...

# Function to load prices from the JSON file
def load_prices():
    with open('prices.json', 'r') as f:
        return json.load(f)

# # Route for the dashboard page
# @app.route("/dashboard.html")
# def dashboard():
#     prices_data = load_prices()  # Load prices data
#     return render_template("dashboard.html", prices_data=prices_data)
# Route for the user dashboard page
# @app.route("/dashboard.html")
# def dashboard():
#     prices_data = load_prices()  # Load prices data
#     return render_template("dashboard.html", prices_data=prices_data)
# Route for the user dashboard page
# @app.route("/dashboard.html")
# def dashboard():
#     prices_data = load_prices()  # Load prices data
#     return render_template("dashboard.html", prices_data=prices_data)


# Function to generate line graph
@app.route("/generate_graph/<item_name>")
def generate_graph(item_name):
    prices_data = load_prices()
    for item in prices_data:
        if item["item"] == item_name:
            dates = [entry["date"] for entry in item["prices"]]
            prices = [entry["price"] for entry in item["prices"]]
            break
    else:
        return jsonify({"error": "Item not found"}), 404

    # Create the graph
    plt.figure(figsize=(10, 5))
    plt.plot(dates, prices, marker='o', linestyle='-', color='blue')
    plt.title(f'Price Trend for {item_name}')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.xticks(rotation=45)
    plt.grid()
    plt.tight_layout()

    # Save the graph as an image
    graph_path = f'static/graphs/{item_name}_price_trend.png'
    plt.savefig(graph_path, transparent=True)  # Save with transparent background
    plt.close()

    return redirect(url_for('dashboard'))  # Redirect back to the dashboard

# Existing code...


# Route for the dashboard page
@app.route("/dashboard.html")
def dashboard():
    # Load users
    users = load_users()

    # Assuming the user is logged in, find the user (this example assumes the first user is logged in)
    current_user = users[0]  # Update this logic as per your authentication logic

    return render_template("dashboard.html", user=current_user)  # Pass the user data to the template


# @app.route("/generate_graph/<item_name>")
# def generate_graph(item_name):
#     prices_data = load_prices()
#     for item in prices_data:
#         if item["item"] == item_name:
#             dates = [entry["date"] for entry in item["prices"]]
#             prices = [entry["price"] for entry in item["prices"]]
#             break
#     else:
#         return jsonify({"error": "Item not found"}), 404

#     # Create the graph
#     plt.figure(figsize=(10, 5))
#     plt.plot(dates, prices, marker='o', linestyle='-', color='blue')
#     plt.title(f'Price Trend for {item_name}')
#     plt.xlabel('Date')
#     plt.ylabel('Price')
#     plt.xticks(rotation=45)
#     plt.grid()
#     plt.tight_layout()

#     # Save the graph as an image
#     graph_path = f'static/graphs/{item_name}_price_trend.png'
#     plt.savefig(graph_path, transparent=True)  # Save with transparent background
#     plt.close()

#     return redirect(url_for('dashboard'))  # Redirect back to the dashboard






@app.route('/data')
def data():
    with open('prices.json') as f:
        prices = json.load(f)
    return jsonify(prices)

@app.route('/newprofile')
def newprofile():
    return render_template('newprofile.html')


if __name__ == "__main__":
    app.run(debug=True)
