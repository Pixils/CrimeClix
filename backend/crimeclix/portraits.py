import os
from flask import Blueprint, request, current_app
from werkzeug.utils import secure_filename

bp = Blueprint("portraits", __name__, url_prefix="/portraits")

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@bp.route("/", methods=("POST", ))
def portraits():
    if request.method == "POST":
        print(request.content_type)
        if "portrait" not in request.files:
            return {"error": "no portrait part"}, 400

        portrait = request.files["portrait"]

        if portrait.filename == "":
            return {"error": "no portrait provided"}, 400

        if portrait and allowed_file(portrait.filename):
            filename = secure_filename(portrait.filename)
            portrait.save(os.path.join(current_app.config["UPLOAD_FOLDER"], filename))