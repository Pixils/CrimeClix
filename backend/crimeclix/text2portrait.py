from flask import Blueprint, request, send_file

bp = Blueprint("text2portrait", __name__, url_prefix="/text2portrait")


@bp.route("/", methods=("GET", "POST"))
def text2portrait():
    raise NotImplementedError
    if request.method == "POST":
        text = request.form["text"]

        # feed text to model and send back the output as response
