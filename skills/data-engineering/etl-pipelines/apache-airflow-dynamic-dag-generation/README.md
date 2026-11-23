# Apache Airflow Dynamic Dag Generation

## Description
Generates dynamic, scalable Apache Airflow DAGs using TaskFlow API and dynamic task mapping (.expand()). Use when scaling ETL pipelines across hundreds of variable client configurations.

## Purpose
Dynamic task mapping in Airflow allows tasks to spawn parallel instances at runtime based on upstream data outputs, eliminating the need to write redundant static DAG boilerplate.

## When to Use
- When executing apache airflow dynamic dag generation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache Airflow, TaskFlow API) cannot be provisioned.

## Supported Technologies
- Apache Airflow
- TaskFlow API
- Python
- Dynamic DAGs

## Example Use Cases
### Multi-Tenant Database Ingestion
Spawning 250 parallel database extract jobs dynamically based on active tenant registry entries.

### S3 Multi-Prefix Partition Processing
Mapping separate ETL worker tasks across every S3 bucket prefix discovered at runtime.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache Airflow) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://airflow.apache.org/docs/apache-airflow/stable/authoring-and-scheduling/dynamic-task-mapping.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
