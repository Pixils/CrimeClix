import os, secrets
from flask import Blueprint, request, current_app
from werkzeug.utils import secure_filename

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
            filename = secure_filename(portrait.filename)
            random_hex = secrets.token_hex(8)
            _, f_ext = os.path.splitext(filename)
            picture_fn = random_hex + f_ext
            portrait.save(os.path.join(current_app.config["UPLOAD_FOLDER"], picture_fn))

            return {}, 201

    return [os.path.join(current_app.config['UPLOAD_FOLDER'], file) for file in os.listdir(current_app.config["UPLOAD_FOLDER"])]