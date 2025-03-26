# Alter Table

## Using Change

```sql
  alter table tableName change fieldNameToChange fieldNameChanged varchar(30)
```

## Using Modify

Change from varchar to int, it's an example.
```sql
  alter table tableName modify fieldNameToChange int not null
```

## Using Add

```sql
  alter table tableName add fieldNameToAdd varchar(40) after fieldNameFromTable
```
