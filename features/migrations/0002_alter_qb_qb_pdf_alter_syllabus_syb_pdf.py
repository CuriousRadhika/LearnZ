# Generated by Django 4.1.4 on 2023-01-07 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('features', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qb',
            name='qb_pdf',
            field=models.FileField(upload_to='media/'),
        ),
        migrations.AlterField(
            model_name='syllabus',
            name='syb_pdf',
            field=models.FileField(upload_to='media/'),
        ),
    ]
