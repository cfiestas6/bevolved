import os
import shutil
import subprocess
import git

def run_tests_on_repo(repo_url, test_path):
    # clone the repo
    repo_name = repo_url.split('/')[-1].split('.')[0]  # get repo name from url
    g = git.cmd.Git(os.getcwd())
    g.clone(repo_url)

    # Walk through the cloned repo directory
    for dirpath, _, filenames in os.walk(repo_name):
        for file in filenames:
            # Find the required source files
            if file.endswith(".c") and not file == "main.c":
                function_name = os.path.splitext(file)[0]  # get function name from file
                src_file_path = os.path.join(dirpath, file)
                
                # Construct the corresponding path in the test directory
                relative_dirpath = os.path.relpath(dirpath, repo_name)
                test_main_file_path = os.path.join(test_path, relative_dirpath, "main.c").replace("\\", "/")
                
                print(f"Expected test file location: {test_main_file_path}")  # For debugging
                
                # Copy main.c (test file) to source directory
                try:
                    shutil.copy(test_main_file_path, dirpath)
                except FileNotFoundError:
                    print(f"Test file for {function_name} not found.")
                    continue
                
                # Compile and run tests
                try:
                    subprocess.run(['gcc', '-o', function_name, src_file_path, os.path.join(dirpath, 'main.c')], check=True)
                    subprocess.run(['./' + function_name], check=True)
                    print(f"Test for {function_name} passed successfully.")
                except subprocess.CalledProcessError:
                    print(f"Test for {function_name} failed.")
