import os, sys
required = ['ANDROID_SDK_ROOT']
missing = [k for k in required if not os.getenv(k)]
if missing:
    print('MISSING_ENV=' + ','.join(missing))
    sys.exit(2)
print('HEALTH=OK')
