import os, requests, json
from flask import Blueprint, request, current_app, send_from_directory

bp = Blueprint("portraits", __name__, url_prefix="/portraits")

@bp.route("/", methods=("GET", "POST"))
def portraits():
    if request.method == "POST":
        response = json.loads(request.data)

        portrait_src = response.get("portrait")

        if not portrait_src:
            return {"error": "portrait is required"}, 400

        portrait = requests.get(portrait_src, allow_redirects=True)

        response = requests.post(
            "https://api.web3.storage/upload",
            headers={"Authorization": "Bearer " + current_app.config["WEB3_KEY"]},
            data=portrait.content,
        ).json()

        return response, 201

    # TODO: return with CIDs
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post>
      <input type=text name=portrait>
      <input type=submit value=Upload>
    </form>
    '''


@bp.route("/<path:name>", methods=("GET",))
def portrait(name):
    return send_from_directory(
        os.path.join("..", current_app.config["UPLOAD_FOLDER"]), name
    )
