## Starts up database
start:
	docker compose up --detach

## Imports data for api
import:
	@chmod +x scripts/saints.sh
	@docker exec data scripts/saints.sh

## Shuts down database
stop:
	docker compose down