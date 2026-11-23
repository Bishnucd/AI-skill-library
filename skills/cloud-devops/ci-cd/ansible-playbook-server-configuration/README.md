# Ansible Playbook Server Configuration

## Description
Authors idempotent Ansible playbooks to provision, configure, and secure Linux server environments. Use when automating bare-metal and cloud virtual machine configuration.

## Purpose
Manual server configuration leads to snowflake servers. Ansible executes declarative, agentless playbooks over SSH, guaranteeing identical system state across hundreds of target servers.

## When to Use
- When executing ansible playbook server configuration in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Ansible, YAML) cannot be provisioned.

## Supported Technologies
- Ansible
- YAML
- SSH
- Linux Hardening

## Example Use Cases
### Automated Bastion Server Hardening
Configuring SSH key access, fail2ban, and firewall rules across all edge bastion hosts.

### Fleet OS Patching
Rolling security kernel patches and updates across 200 Linux virtual machines.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Ansible) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
