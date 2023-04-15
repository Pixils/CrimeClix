import os, requests
from flask import Blueprint, request, current_app, send_from_directory

bp = Blueprint("portraits", __name__, url_prefix="/portraits")

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@bp.route("/", methods=("GET", "POST"))
def portraits():
    if request.method == "POST":
        if "portrait" not in request.files:
            return {"error": "no portrait part"}, 400

        portrait = request.files["portrait"]

        if portrait.filename == "":
            return {"error": "no portrait provided"}, 400

        if portrait and allowed_file(portrait.filename):
            data = portrait.stream.read()
            response = requests.post(
                "https://api.web3.storage/upload",
                headers={
                    "Authorization": "Bearer " + current_app.config["WEB3_KEY"]
                },
                data=data
            ).json()

            return response, 201

    # TODO: return with CIDs
    return {}


@bp.route("/<path:name>", methods=("GET",))
def portrait(name):
    return send_from_directory(
        os.path.join("..", current_app.config["UPLOAD_FOLDER"]), name
    )
