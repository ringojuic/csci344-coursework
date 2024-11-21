### Set Up Your Virtual Environment
Open the terminal and navigate to your `tutorial09` folder. Then, set up a virtual environment and install the dependencies as follows (depending on your operating system):

#### For Mac, Unix, Linux, or GitBash

```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt    # install dependencies
```

#### For Windows Powershell or Command Prompt

```bash
# create the virtual environment
py -m venv env  

# run the activate.bat script as follows:
env\Scripts\activate

# and finally, install the Python dependencies
py -m pip install -r requirements.txt
```

### Run Your Flask Web Server

When you're done, try running your flask app from your command line:


```bash
flask run --debug

# if you named your app something other than app.py (say, hello.py) type this:
# flask flask --app hello run --debug
```

You should see the following output:
```bash
 * Serving Flask app "app.py" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 273-580-071
 ```

 Navigate to <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a>, and you should see a screen that lists the exercises that you are to complete:
