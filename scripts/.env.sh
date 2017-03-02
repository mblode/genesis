# Craft Scripts Environment
#
# Local environmental config for nystudio107 Craft scripts
#
# @author    nystudio107
# @copyright Copyright (c) 2017 nystudio107
# @link      https://nystudio107.com/
# @package   craft-scripts-environment
# @since     1.0.2
# @license   MIT
#
# This file should be renamed to '.env.sh' and it should reside in the
# `scripts` directory.  Add '.env.sh' to your .gitignore.

# -- GLOBAL settings --

GLOBAL_DB_TABLE_PREFIX="craft_"

# -- LOCAL settings --

# Local path constants; paths should always have a trailing /
LOCAL_ROOT_PATH="/Users/mblode/Sites/genesis/"
LOCAL_ASSETS_PATH=${LOCAL_ROOT_PATH}"public/assets/"

# Local user & group that should own the Craft CMS install
LOCAL_CHOWN_USER="mblode"
LOCAL_CHOWN_GROUP="staff"

# Local directories relative to LOCAL_ROOT_PATH that should be writeable by the $CHOWN_GROUP
LOCAL_WRITEABLE_DIRS=(
                "craft/storage"
                "public/assets"
                )

# Local asset directories relative to LOCAL_ASSETS_PATH that should be synched with remote assets
LOCAL_ASSETS_DIRS=(
                ""
                )

# Local database constants
LOCAL_DB_NAME="genesis"
LOCAL_DB_PASSWORD="blode123"
LOCAL_DB_USER="mblode"

# These are here for MAMP, which requires a full path to the `mysql` executable inside the application package
LOCAL_MYSQL_CMD="mysql"
LOCAL_MYSQLDUMP_CMD="mysqldump"

# -- REMOTE settings --

# Remote ssh credentials, user@domain.com and Remote SSH Port
REMOTE_SSH_LOGIN="forge@188.166.210.0"
REMOTE_SSH_PORT="22"

# Remote path constants; paths should always have a trailing /
REMOTE_ROOT_PATH="/srv/users/serverpilot/apps/genesis/"
REMOTE_ASSETS_PATH=${REMOTE_ROOT_PATH}"public/assets/"

# Remote database constants
REMOTE_DB_NAME="genesis"
REMOTE_DB_PASSWORD="blode123"
REMOTE_DB_USER="mblode"
REMOTE_DB_HOST="localhost"
REMOTE_DB_PORT="3306"
