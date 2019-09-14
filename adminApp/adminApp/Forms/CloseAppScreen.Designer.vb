<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class CloseAppScreen
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(CloseAppScreen))
        Me.lblQuestion = New System.Windows.Forms.Label()
        Me.btnAccept = New System.Windows.Forms.Button()
        Me.btnCancel = New System.Windows.Forms.Button()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblQuestion
        '
        Me.lblQuestion.AutoSize = True
        Me.lblQuestion.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.lblQuestion.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblQuestion.ForeColor = System.Drawing.SystemColors.ButtonFace
        Me.lblQuestion.Location = New System.Drawing.Point(490, 455)
        Me.lblQuestion.Name = "lblQuestion"
        Me.lblQuestion.Size = New System.Drawing.Size(386, 24)
        Me.lblQuestion.TabIndex = 1
        Me.lblQuestion.Text = "¿En realidad desea cerrar la aplicación?"
        '
        'btnAccept
        '
        Me.btnAccept.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnAccept.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnAccept.FlatAppearance.BorderSize = 0
        Me.btnAccept.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnAccept.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAccept.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnAccept.Location = New System.Drawing.Point(589, 505)
        Me.btnAccept.Name = "btnAccept"
        Me.btnAccept.Size = New System.Drawing.Size(75, 29)
        Me.btnAccept.TabIndex = 4
        Me.btnAccept.Text = "Aceptar"
        Me.btnAccept.UseVisualStyleBackColor = False
        '
        'btnCancel
        '
        Me.btnCancel.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnCancel.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCancel.FlatAppearance.BorderSize = 0
        Me.btnCancel.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCancel.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnCancel.ForeColor = System.Drawing.SystemColors.ButtonFace
        Me.btnCancel.Location = New System.Drawing.Point(689, 505)
        Me.btnCancel.Name = "btnCancel"
        Me.btnCancel.Size = New System.Drawing.Size(89, 29)
        Me.btnCancel.TabIndex = 5
        Me.btnCancel.Text = "Cancelar"
        Me.btnCancel.UseVisualStyleBackColor = False
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.imgNosbey.FlatAppearance.BorderSize = 0
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(525, 170)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(316, 275)
        Me.imgNosbey.TabIndex = 13
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'btnPrevious
        '
        Me.btnPrevious.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.Location = New System.Drawing.Point(1310, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(37, 40)
        Me.btnPrevious.TabIndex = 34
        Me.btnPrevious.UseVisualStyleBackColor = False
        '
        'CloseAppScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnCancel)
        Me.Controls.Add(Me.btnAccept)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.lblQuestion)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "CloseAppScreen"
        Me.Text = "CloseApp"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents lblQuestion As Label
    Friend WithEvents btnAccept As Button
    Friend WithEvents btnCancel As Button
    Friend WithEvents imgNosbey As Button
    Friend WithEvents btnPrevious As Button
End Class
