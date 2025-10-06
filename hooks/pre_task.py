import os

# Pre-task hook for AegisRunner tasks
print(f"[pre] LOG_LEVEL={os.getenv('LOG_LEVEL','INFO')}")
