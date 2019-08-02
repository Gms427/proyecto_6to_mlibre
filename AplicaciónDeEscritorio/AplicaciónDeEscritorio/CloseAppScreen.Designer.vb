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
        Me.panelCerrar = New System.Windows.Forms.Panel()
        Me.btnCancelar = New System.Windows.Forms.Button()
        Me.btnAceptar = New System.Windows.Forms.Button()
        Me.titCerrar = New System.Windows.Forms.Label()
        Me.titNosbey = New System.Windows.Forms.Button()
        Me.panelCerrar.SuspendLayout()
        Me.SuspendLayout()
        '
        'panelCerrar
        '
        Me.panelCerrar.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.panelCerrar.Controls.Add(Me.btnCancelar)
        Me.panelCerrar.Controls.Add(Me.btnAceptar)
        Me.panelCerrar.Controls.Add(Me.titCerrar)
        Me.panelCerrar.Location = New System.Drawing.Point(384, 110)
        Me.panelCerrar.Name = "panelCerrar"
        Me.panelCerrar.RightToLeft = System.Windows.Forms.RightToLeft.No
        Me.panelCerrar.Size = New System.Drawing.Size(599, 460)
        Me.panelCerrar.TabIndex = 7
        '
        'btnCancelar
        '
        Me.btnCancelar.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCancelar.FlatAppearance.BorderSize = 0
        Me.btnCancelar.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnCancelar.Location = New System.Drawing.Point(310, 305)
        Me.btnCancelar.Name = "btnCancelar"
        Me.btnCancelar.Size = New System.Drawing.Size(75, 29)
        Me.btnCancelar.TabIndex = 5
        Me.btnCancelar.Text = "Cancelar"
        Me.btnCancelar.UseVisualStyleBackColor = True
        '
        'btnAceptar
        '
        Me.btnAceptar.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnAceptar.FlatAppearance.BorderSize = 0
        Me.btnAceptar.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAceptar.Location = New System.Drawing.Point(215, 305)
        Me.btnAceptar.Name = "btnAceptar"
        Me.btnAceptar.Size = New System.Drawing.Size(75, 29)
        Me.btnAceptar.TabIndex = 4
        Me.btnAceptar.Text = "Aceptar"
        Me.btnAceptar.UseVisualStyleBackColor = True
        '
        'titCerrar
        '
        Me.titCerrar.AutoSize = True
        Me.titCerrar.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.titCerrar.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.titCerrar.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.titCerrar.Location = New System.Drawing.Point(130, 245)
        Me.titCerrar.Name = "titCerrar"
        Me.titCerrar.Size = New System.Drawing.Size(346, 24)
        Me.titCerrar.TabIndex = 1
        Me.titCerrar.Text = "¿En realidad desea cerrar la aplicación?"
        '
        'titNosbey
        '
        Me.titNosbey.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.titNosbey.BackgroundImage = CType(resources.GetObject("titNosbey.BackgroundImage"), System.Drawing.Image)
        Me.titNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.titNosbey.Enabled = False
        Me.titNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.titNosbey.FlatAppearance.BorderSize = 0
        Me.titNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.titNosbey.Location = New System.Drawing.Point(459, 125)
        Me.titNosbey.Name = "titNosbey"
        Me.titNosbey.Size = New System.Drawing.Size(449, 195)
        Me.titNosbey.TabIndex = 13
        Me.titNosbey.UseVisualStyleBackColor = False
        '
        'CloseApp
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.titNosbey)
        Me.Controls.Add(Me.panelCerrar)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "CloseApp"
        Me.Text = "CloseApp"
        Me.panelCerrar.ResumeLayout(False)
        Me.panelCerrar.PerformLayout()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents panelCerrar As Panel
    Friend WithEvents titNosbey As Button
    Friend WithEvents titCerrar As Label
    Friend WithEvents btnCancelar As Button
    Friend WithEvents btnAceptar As Button
End Class
