import os
from flask_app import create_app, socketio

app  = create_app(debug = True)
if __name__ == "__main__":
	port = int(os.environ.get('PORT', 8080))
	print("Starting application...")
	socketio.run(app, host="0.0.0.0", port=port)
