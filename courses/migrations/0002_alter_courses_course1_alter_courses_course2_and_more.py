# Generated by Django 4.1.4 on 2023-01-02 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='course1',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='courses',
            name='course2',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='courses',
            name='course3',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='courses',
            name='course4',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='courses',
            name='course5',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='courses',
            name='course6',
            field=models.CharField(default=None, max_length=100),
        ),
    ]
